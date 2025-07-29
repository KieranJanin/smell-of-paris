import * as fs from 'fs';
import * as path from 'path';

// This interface should mirror the one in src/lib/data.ts
interface Perfume {
  id: number;
  name: string;
  brand: string;
  collection: string;
  price: string;
  imageUrl: string;
  description: string;
  category: 'Floral' | 'Woody' | 'Oriental' | 'Fresh' | 'Spicy' | 'Fruity';
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  officialUrl?: string;
  fragranticaUrl?: string;
}

/**
 * A robust function to parse a single line of a CSV file,
 * accounting for quoted fields that may contain commas.
 * @param line - A single string line from a CSV file.
 * @returns An array of strings representing the columns.
 */
function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let currentVal = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (inQuotes) {
      // If we are inside quotes
      if (char === '"') {
        // Check for an escaped quote ("")
        if (i + 1 < line.length && line[i + 1] === '"') {
          currentVal += '"';
          i++; // Skip the next character
        } else {
          inQuotes = false; // End of quoted section
        }
      } else {
        currentVal += char;
      }
    } else {
      // If we are not inside quotes
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        values.push(currentVal);
        currentVal = '';
      } else {
        currentVal += char;
      }
    }
  }
  values.push(currentVal); // Add the last value
  return values;
}


function parseCsv(filePath: string): Perfume[] {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.trim().split(/\n?\n/).filter(line => line.trim() !== '');

  if (lines.length < 2) return []; // Not enough content to process

  const headers = parseCsvLine(lines[0]).map(h => h.trim());
  const perfumes: Perfume[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCsvLine(lines[i]);

    if (values.length === headers.length) {
      const perfumeData: { [key: string]: string } = headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {} as { [key: string]: string });

      const perfume: Perfume = {
        id: parseInt(perfumeData.id, 10),
        name: perfumeData.name || '',
        brand: perfumeData.brand || '',
        collection: perfumeData.collection || '',
        price: perfumeData.price || '',
        imageUrl: perfumeData.imageUrl || '',
        description: perfumeData.description || '',
        category: perfumeData.category as Perfume['category'] || 'Fresh',
        notes: {
          top: perfumeData.notes_top ? perfumeData.notes_top.split(';').map(n => n.trim()).filter(Boolean) : [],
          middle: perfumeData.notes_middle ? perfumeData.notes_middle.split(';').map(n => n.trim()).filter(Boolean) : [],
          base: perfumeData.notes_base ? perfumeData.notes_base.split(';').map(n => n.trim()).filter(Boolean) : [],
        },
        officialUrl: perfumeData.officialUrl || undefined,
        fragranticaUrl: perfumeData.fragranticaUrl || undefined,
      };
      perfumes.push(perfume);
    } else {
      console.warn(`[WARNING] Skipping line ${i + 1} in ${path.basename(filePath)}. Reason: Column count mismatch. Expected ${headers.length}, but found ${values.length}.`);
      console.warn(`          Line content: "${lines[i]}"`);
    }
  }
  return perfumes;
}


function generateTsFile(perfumes: Perfume[], outputPath: string) {
  const tsContent = `import type { Perfume } from './data';

export const perfumes: Perfume[] = ${JSON.stringify(perfumes, null, 2)};`;
  fs.writeFileSync(outputPath, tsContent, 'utf-8');
}

const csvDirectory = path.join(__dirname, '../../csv');
const outputFilePath = path.join(__dirname, '../lib/perfumes.ts');
let allPerfumes: Perfume[] = [];

try {
  if (!fs.existsSync(csvDirectory)) {
    console.error(`Error: Directory not found at ${csvDirectory}. Please create it and add your CSV files.`);
    process.exit(1);
  }

  const files = fs.readdirSync(csvDirectory);
  const csvFiles = files.filter(file => file.endsWith('.csv'));

  if (csvFiles.length === 0) {
    console.log(`No CSV files found in ${csvDirectory}. The perfumes.ts file will be empty.`);
  } else {
    console.log(`Found CSV files to process: ${csvFiles.join(', ')}`);
  }

  csvFiles.forEach(csvFile => {
    const csvFilePath = path.join(csvDirectory, csvFile);
    const perfumesData = parseCsv(csvFilePath);
    allPerfumes = allPerfumes.concat(perfumesData);
  });

  generateTsFile(allPerfumes, outputFilePath);

  console.log(`
Successfully generated ${outputFilePath} with ${allPerfumes.length} total entries from ${csvFiles.length} CSV file(s).`);

} catch (error) {
  console.error('An error occurred during data generation:', error);
  process.exit(1);
}
