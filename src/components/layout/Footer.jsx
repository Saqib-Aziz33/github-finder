const Footer = () => {
    const footerYear = new Date().getFullYear()
    return (
        <footer className="footer p-4 bg-gray-700 text-white-content footer-center">
            <div>
            Github Finder project &copy;{footerYear} by Saqib 😊
            </div>
        </footer>
    )
}

export default Footer
