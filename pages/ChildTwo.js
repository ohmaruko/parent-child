export default function ChildTwo({childParent}) {
    const data = "This is data from the child page to the parent page."
    return(
        <>
         <button onClick={() => childParent(data)}>Chick Child to Parent</button>
        </>
    )
}