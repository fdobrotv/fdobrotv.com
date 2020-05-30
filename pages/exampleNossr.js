import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/exampleComponent'),
    { ssr: false }
)

function ExampleNossr() {
    return (
        <div>
            {/*<Header />*/}
            <DynamicComponentWithNoSSR />
            <p>HOME PAGE is here!</p>
        </div>
    )
}

export default ExampleNossr