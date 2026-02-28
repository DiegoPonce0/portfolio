
export function Footer() {
  return (
      <footer className="bg-gray-100 dark:bg-gray-800 text-center py-4 text-white">
          <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
            <p>&copy; 2024 Diego Ponce. All rights reserved.</p>
            <div className="border-gray-300 dark:border-gray-700 mt-4 pt-4 flex justify-center gap-4">
              <a className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md" href="https://www.linkedin.com/in/diego-ponce-9b1b4a1b2/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md" href="https://github.com/diego-ponce" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
      </footer>
    ); 
};