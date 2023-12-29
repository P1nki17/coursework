clickboardInput.onclick = () => {
    navigator.clipboard.writeText('SMART10')
    successMessage.classList.add('active')
    setTimeout(() => successMessage.classList.remove('active'), 2000)
}