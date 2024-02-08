import Input from "../../components/input/Input"

function CardFormScreen(){
    return(
        <div className="py-6 px-4">
            <form className="flex flex-col gap-4 h-full justify-center">
                <div className="flex flex-col gap-3">
                    <Input 
                        label="cardholder name"
                        placeholder="e.g. Jane Apleseed"
                    />
                    <Input 
                        label="card number"
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                    
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="font-semibold uppercase text-[hsl(278,68%,11%)]">exp. date (mm/yy)</label>
                        <div className="flex gap-2">
                            <Input 
                                placeholder="MM"
                            />
                            <Input 
                                placeholder="YY"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold uppercase text-[hsl(278,68%,11%)]">cvc</label>
                        <Input 
                            
                            placeholder="e.g. 123"
                        />
                    </div>
                    
                </div>
                <button className="w-full text-center my-5 text-white py-2 rounded-lg bg-[hsl(278,68%,11%)]">Confirm</button>
            </form>
        </div>
    )
}

export default CardFormScreen
