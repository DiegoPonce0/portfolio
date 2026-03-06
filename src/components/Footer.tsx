
export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">

        <p className="text-sm dark:text-white">
          © {new Date().getFullYear()} Diego Ponce
        </p>

        <div className="flex items-center gap-4">

          <a
            href="https://www.linkedin.com/in/diego-ponce-712991217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            <svg className="w-6 h-6 fill-current">
              <use href="/sprite.svg#linkedin" />
            </svg>
          </a>

          <a
            href="https://github.com/DiegoPonce0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            <svg className="w-6 h-6 fill-current">
              <use href="/sprite.svg#github" />
            </svg>
          </a>

          <a
            href="mailto:diego_lpz29@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-primary transition"
          >
            Contact
          </a>

        </div>

      </div>
    </footer>
  );
}