import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/DrawerComponent'),
    { ssr: false }
)

function materialSideBar() {
    return (
        <div>
            {/*<Header />*/}
            <DynamicComponentWithNoSSR />
            <p>TEST!</p>
        </div>
    )
}

export default materialSideBar