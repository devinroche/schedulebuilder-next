import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Navbar = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>about</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>data</a>
        </Link>
    </div>
)

export default Navbar