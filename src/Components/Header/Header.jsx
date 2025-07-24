export default function Header({ children, className }){
    return(
        <header className={className}>
            <h1>{children}</h1>
        </header>
    )
}