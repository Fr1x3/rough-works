import Input from "./Input"

function DateInput(){
    return(
        <div className="grid grid-cols-3 gap-4 ">
            {inputData.map( (data) => {
                return(
                    <Input 
                        key={data.id}
                        {...data}
                    />
                )
            })}
        </div>
    )
}

export default DateInput

const inputData = [
    {
        id: 0,
        name: 'day',
        placeholder: 'DD',
        maxLength: 2,
    },
    {
        id: 1,
        name: 'month',
        placeholder: 'MM',
        maxLength: 2,
    },
    {
        id: 2,
        name: 'day',
        placeholder: 'YYYY',
        maxLength: 4,
    },
]