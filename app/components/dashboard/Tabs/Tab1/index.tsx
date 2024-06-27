"use client"
import { TbCheck } from 'react-icons/tb'
import apprecialIcon from '@/app/assets/dashboard/apprecial-icon.svg'
import Image from 'next/image'
const personal = [
    "Access your account from different devices.", 
    "Enhanced security (Apprecial 3FA).", 
    "Recorded activity through the Dashboard.", 
    "Customer support for account-related issues.",
]
const business = [
    "Access to Apprecial’s business products.", 
    "Receive dedicated customer support.", 
    "Efficient collaboration with team members.", 
    "Analytics and reporting features.",
]
export default function Tab2() {
    return (
        <>
            <div className="relative py-10 ">
                <div className='max-w-screen-wrap mx-auto relative px-4 w-full'>
                    <div className="space-y-10">
                        {/*Apprecial intro*/}
                        <div className="space-y-5 max-w-7xl mx-auto pt-10">
                            <div className="flex justify-center gap-5">
                                <Image
                                    className="object-cover h-auto w-auto"
                                    src={apprecialIcon}
                                    width={20}
                                    height={20}
                                    loading="eager"
                                    alt=" "
                                /><h2 className="text-center text-[#1E232C] text-4xl font-bold ">Accounts</h2>

                            </div>
                            <p className="text-[#011D41]/70 text-center font-medium leading-relaxed text-lg">Upon registering, you will have the option to choose between 2 types of accounts, Personal and Business. Business accounts will require additional verification before being granted access to Apprecial&apos;s platforms, while personal accounts will require standard ID verification through Driving Licences, Passports, Bank Statements, and similar.</p>
                        </div>


                        {/* Blocks */}
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
                            <div className="bg-white rounded-xl shadow p-5 lg:p-10">
                                {/* Icon */}
                                <div className="w-20 h-20 xl:w-32 xl:h-32 border border-primmary/10 rounded-full flex justify-center items-center mx-auto">
                                <svg className="w-12 text-[#6289CD]/50" viewBox="0 0 52 63" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.0723 29.8225C34.3075 29.8225 40.9836 23.1465 40.9836 14.9112C40.9836 6.67589 34.3075 -0.00012207 26.0723 -0.00012207C17.837 -0.00012207 11.161 6.67589 11.161 14.9112C11.161 23.1465 17.837 29.8225 26.0723 29.8225Z" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0732 34.9268C19.1082 34.9268 18.8244 31.5774 14.7593 30.2426C8.41906 28.16 2.78091 36.0014 1.37493 41.4638C-0.760107 49.7553 -0.412706 62.2612 10.1949 62.2612H22.2442H22.2491H22.2636H22.2875H22.3212H22.3645H22.4176H22.48H22.5522H22.584H22.634H22.7256H22.8268H22.9375H22.9551H23.0578H23.1876H23.3158H23.3273H23.4765H23.6353H23.6672H23.8039H23.9818H24.0088H24.1695H24.3407H24.3665H24.5732H24.6627H24.7897H24.9752H25.0155H25.2514H25.2781H25.4966H25.5718H25.7516H25.8555H26.0162H26.1299H26.2906H26.3945H26.5743H26.6495H26.868H26.8947H27.1306H27.1709H27.3564H27.4834H27.5728H27.7796H27.8054H27.9766H28.1373H28.1643H28.3422H28.4789H28.5108H28.6696H28.8185H28.83H28.9582H29.088H29.1907H29.2083H29.319H29.4202H29.5114H29.5615H29.5933H29.6654H29.7279H29.7809H29.8243H29.8579H29.8819H29.8964H29.9013H41.9506C52.5585 62.2612 52.9056 49.7553 50.7706 41.4638C49.3646 36.0018 43.7264 28.1604 37.3862 30.2426C33.321 31.5777 33.037 34.9268 26.0723 34.9268H26.0732Z" />
                                    </svg>

                                </div>

                                <div className="space-y-4 pt-5">
                                    <h3 className="text-[#1E232C] font-medium capitalize text-center text-3xl">Personal</h3>
                                    <p className="text-center text-[#1E232C] text-lg font-medium leading-relaxed">A generic Apprecial account for your personal use with Dashboard access.</p>
                                </div>

                                <div className="p-5 bg-[#F7F9FE] rounded-3xl mt-10">
                                    <div className="max-w-full mx-auto divide-y divide-dbprimary/10">
                                        {personal.map((item: any, index: any) => {
                                            return (
                                                <>
                                                    <div className="flex items-start justify-center gap-3 py-3" key={index}>
                                                        <TbCheck size="24" className="text-green-600 relative top-1" /><p className="text-[#011D41]/70 text-lg font-medium">{item}</p>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>

                            <div className="bg-white rounded-xl shadow p-5 lg:p-10">
                                {/* Icon */}
                                <div className="w-20 h-20 xl:w-32 xl:h-32 border border-primmary/10 rounded-full flex justify-center items-center mx-auto">
                                    <svg className="w-14 text-[#6289CD]/50"viewBox="0 0 68 62" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.3605 44.4419H30.6396C28.7913 44.4419 27.2791 42.9297 27.2791 41.0814H3.78946V54.5233C3.78946 58.2198 6.81387 61.2442 10.5104 61.2442H57.5233C61.2198 61.2442 64.2442 58.2198 64.2442 54.5233V41.0814H40.721C40.721 42.9297 39.2088 44.4419 37.3605 44.4419ZM60.8838 14.1977H47.4419C47.4419 6.77109 41.4267 0.755859 34 0.755859C26.5734 0.755859 20.5582 6.77109 20.5582 14.1977H7.11632C3.4198 14.1977 0.395386 17.2221 0.395386 20.9186V31C0.395386 34.7302 3.3862 37.721 7.11632 37.721H27.2791V34.3605C27.2791 32.5123 28.7913 31 30.6396 31H37.3605C39.2088 31 40.721 32.5123 40.721 34.3605V37.721H60.8838C64.5803 37.721 67.6047 34.6966 67.6047 31V20.9186C67.6047 17.2221 64.5803 14.1977 60.8838 14.1977ZM27.2791 14.1977C27.2791 10.5012 30.3035 7.47679 34 7.47679C37.6965 7.47679 40.721 10.5012 40.721 14.1977H27.2455H27.2791Z"  />
                                    </svg>   

                                </div>

                                <div className="space-y-4 pt-5">
                                    <h3 className="text-zinc-800 font-medium capitalize text-center text-3xl">Business</h3>
                                    <p className="text-center text-[#1E232C] text-lg font-medium leading-relaxed">An account for legally registered businesses to access Apprecial&apos;s services.</p>
                                </div>

                                <div className="p-5 bg-[#F7F9FE] rounded-3xl mt-10">
                                    <div className="max-w-full mx-auto divide-y divide-dbprimary/10">
                                        {business.map((item: any, index: any) => {
                                            return (
                                                <>
                                                    <div className="flex items-start justify-center gap-3 py-3" key={index}>
                                                    <TbCheck size="24" className="text-green-600 relative top-1" /><p className="text-[#011D41]/70 text-lg font-medium">{item}</p>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}