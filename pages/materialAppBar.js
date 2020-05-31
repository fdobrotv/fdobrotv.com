import dynamic from 'next/dynamic'

const AppBarComponent = dynamic(
    () => import('../components/AppBarComponent'),
    { ssr: false }
)

function materialAppBar() {
    return (
        <div>
            <AppBarComponent />
        </div>
    )
}

export default materialAppBar