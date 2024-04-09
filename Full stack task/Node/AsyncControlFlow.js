const fs = require('fs').promises;

async function readFilesInParallel() {
  try {
    const [file1, file2, file3] = await Promise.all([
      fs.readFile('file1.txt', 'utf-8'),
      fs.readFile('file2.txt', 'utf-8'),
      fs.readFile('file3.txt', 'utf-8')
    ]);
    console.log('Content of file 1:', file1);
    console.log('Content of file 2:', file2);
    console.log('Content of file 3:', file3);
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

async function readFilesSequentially() {
  try {
    const file1 = await fs.readFile('file1.txt', 'utf-8');
    console.log('Content of file 1:', file1);

    const file2 = await fs.readFile('file2.txt', 'utf-8');
    console.log('Content of file 2:', file2);

    const file3 = await fs.readFile('file3.txt', 'utf-8');
    console.log('Content of file 3:', file3);
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

// Usage
readFilesInParallel();
readFilesSequentially();
