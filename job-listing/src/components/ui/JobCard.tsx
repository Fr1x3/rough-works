import { JobData } from "../../utils/interfaces/jobDetails"
import * as icons from '../../utils/icons'
import Pills from "../Pills"

type JobCardProp = {
    jobDetails: JobData,
    selectFilterCategories: (category: string) => void
}

function JobCard({ jobDetails, selectFilterCategories } : JobCardProp){
    return(
        <div className="relative grid grid-rows-[auto_auto] lg:static lg:grid-cols-[auto_1fr_auto] gap-3 lg:gap-1 p-6 bg-white w-full rounded shadow-md shadow-desaturated-cyan lg:w-4/5 lg:items-center lg:px-12 lg:py-7 ">
            <div className=" absolute left-6 top-0 transform -translate-y-1/2 h-12 w-12 lg:h-[5.5rem] lg:w-[5.5rem] rounded-full lg:static  lg:items-center lg:justify-end lg:left-0 lg:transform-none">
                <img loading="lazy" src={icons[jobDetails.logo as keyof typeof icons]} alt="logo" className="w-full h-full" />
            </div>
            <div className="grid grid-rows-3 gap-3 mt-3 lg:mt-0 lg:gap-2 lg:pl-4">
                <div className="flex gap-3 items-center">
                    <h1 className="font-bold text-desaturated-cyan mr-2">{jobDetails.company}</h1>
                    {jobDetails.new && <p className="uppercase text-white bg-desaturated-cyan rounded-e-full rounded-s-full font-bold px-1 text-sm">new!</p>}
                    {jobDetails.featured && <p className="uppercase bg-very-dark-cyan text-white rounded-e-full rounded-s-full font-bold px-1 text-sm">featured</p>}
                </div>
                <p className="font-bold text-very-dark-cyan">{jobDetails.position}</p>
                <div className="flex items-center gap-2 text-dark-cyan">
                    <p>{jobDetails.postedAt}</p>
                    <div className="h-1 w-1 bg-dark-cyan"/>
                    <p>{jobDetails.contract}</p>
                    <div className="h-1 w-1 bg-dark-cyan"/>
                    <p>{jobDetails.location}</p>
                </div>
                <hr className="h-[.125rem] bg-dark-cyan lg:hidden"/>
            </div>
            <div className="flex flex-wrap gap-3 text-desaturated-cyan font-bold lg:items-center lg:justify-end">
                { jobDetails.role && <Pills title={jobDetails.role} handleSelected={ selectFilterCategories}/> }
                { jobDetails.level && <Pills title={jobDetails.level} handleSelected={ selectFilterCategories} /> }
                { jobDetails.languages && 
                    jobDetails.languages.map( 
                        language => <Pills title={language} handleSelected={ selectFilterCategories} key={language} />
                    )
                }
                { jobDetails.tools && 
                    jobDetails.tools.map( 
                        tool => <Pills title={tool}  handleSelected={ selectFilterCategories} key={tool}/>
                    )
                }
            </div>
        </div>
    )
}

export default JobCard