const ValidateError = ({error}:{error:string}) => {
    return(
        <>
            <div className="text-red-600 text-xs font-medium mt-2">{error}</div>
        </>
    )
}

export default ValidateError;