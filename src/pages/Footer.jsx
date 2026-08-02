export default function Footer() {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <div className='bg-blue-700 p-3'>
            <p className='text-white text-center'>Copyright {year} Lost & Found Portal. All rights reserved</p>
        </div>
    )
}