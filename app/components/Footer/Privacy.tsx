"use client"
import { useColorModeValue } from '@chakra-ui/react'

export default function Privacy() {
    const isDark = useColorModeValue(false, true)
    return (
        <>
            <div className='space-y-4'>
                <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>Welcome to Apprecial’s Privacy Notice, where we outline the information collection process, your rights, and the reasons behind our data practices.</p>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Who Are We?</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>Apprecial develops digital products for mobile and web platforms to enhance daily life and productivity. Our current offerings include the Apprecial Dashboard and Werugo, with more products and games continually released by Apprecial and our subsidiary, PlayPlix.</p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Our Dashboard serves as the central hub for managing Apprecial-related mobile services, updating personal information, and altering your personal security. Every product of ours requires an Apprecial account, which you will receive once you have registered at https://dash.apprecial.com. Certain age-restricted products require a sub-profile that necessitates additional identity verification for access.
                    </p>
                </div>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Information Apprecial Collects</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>We will now help you understand what information we collect from you.</p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        The information we collect is mandatory and is neither excessive nor unnecessary. We only collect necessary and minimal information to ensure our products function optimally. Upon registering for an Apprecial account, you provide your first and last name, date of birth, a self-created 6-digit PIN, a personally drawn shape, and if you want an extra step of security, a photograph of your choice for our Photographic Login.
                    </p> <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`} >
                        As mentioned previously, a single Apprecial account does not grant you access to every single product of ours. For our products that have an age limit/restriction, you will be required to provide additional verification to access them, which could come in the form of a Driving License, Passport or Utility Bill.
                    </p><p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Certain age-restricted products may require additional verification, such as a Driving License, Passport, or Utility Bill. Subscription-based products require payment information, all of which is 256-bit encrypted.
                    </p><p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Our applications will give you the option to leave feedback, which is useful for finding bugs and for us to listen to your general feature requests that could improve the overall usability of the said product. If a request is made, we will collect any bug/feature submissions you make through the “Contributions” section.
                    </p><p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Our applications may collect device information for proper functionality. For example, Werugo collects details like device type, model, location, and operating system. Granting relevant permissions during setup is essential for these products to work as intended. You will need to grant Werugo all of the relevant permissions for it to work as intended, which you will do during the setup process.
                    </p><p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        This will be reiterated as you are setting it up for the first time and is only collected whenever your device contacts the Apprecial servers. If you do not want to share the additional information that some of our products require, then it may impact the experience with Apprecial, and you may not be able to participate in certain services which require the usage of additional information to function. But in no circumstances will we discriminate against you for exercising your rights.
                    </p><p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Any Apprecial product used to send and receive messages, calls, and video calls remains end-to-end encrypted; therefore, no third party, including Apprecial, shall have access to your data chats or video calls.
                    </p>

                </div>
                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Why Does Apprecial Collect Data?</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>Apprecial is a company that takes data protection, privacy, and security very seriously. To keep Apprecial a secure and trusted company, we must authenticate and validate that people are who they claim they are and ensure they are not committing identity theft or using bots to try and endanger others.</p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Data collection is vital for authentication, identity validation, and ensuring a secure and trusted user experience. Apprecial utilizes your information to safeguard against identity theft and bot usage. Our security measures and account verification processes prevent unauthorized access, making it practically impossible for bots to harm our products.
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        We do not force users into creating an email account while signing up for an Apprecial account; instead, we use our own developed secure authentication system, offering many advantages over the traditional email and password method.
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Your information is used to make our products function correctly and attain our objective of keeping data protected. As all our products require an Apprecial account, not everybody and anybody can access them.
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        With the Apprecial security set in place, it makes it practically impossible for bots to create accounts, meaning they cannot gain access to any Apprecial products. If somehow, bots did manage to gain access to any Apprecial products, they would not be able to do any harm to you, as any communication-based product of ours requires additional identity verification. Our systems in place will always be stringently scanning for any unusual behavioural patterns to harden the account security.
                    </p>


                </div>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Innovation</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>Allowing you to suggest new feature requests and flag any bugs you find allows us to innovate and create new products that we deem useful and that will continue to increase your efficiency and productivity. </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        This includes creative ideas, comments, suggestions, proposals, plans or any other material that you may send; you acknowledge and agree that we may, at any time without restriction, edit, copy, publish, distribute, translate and otherwise use any medium and any ideas or suggestions that you forward to us.
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        This includes creative ideas, comments, suggestions, proposals, plans or any other material that you may send; you acknowledge and agree that we may, at any time without restriction, edit, copy, publish, distribute, translate and otherwise use any medium and any ideas or suggestions that you forward to us.
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>We are not obligated to:</p>
                    <ul className='flex flex-col gap-1'>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> a) keep your suggestion(s)/idea(s) confidential</li>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> b)  pay compensation for any suggestion(s)/idea(s)</li>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> c) respond to any suggestion(s)/idea(s) </li>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> d) acknowledge you for the suggestion(s)/idea(s).</li>
                    </ul>

                </div>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Communication With You</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>Your Apprecial ID is used for communication and providing notifications related to updates, security, or privacy. Customer service interactions are recorded to assist with queries or requests.</p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        For instance, if our system detects a suspicious login attempt or a strange pattern, you will immediately be informed so that you can make the necessary changes to tighten up your account security. Furthermore, if you reach out to Apprecial customer service, your request/query will be recorded so that we can assist you with your request. The details of the customer service are mentioned at the end of this privacy notice.
                    </p>
                </div>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Ways To Access and Update Your Information</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>The Dashboard is your central hub for updating personal information or deleting your account. We ensure the accuracy and completeness of your information and encourage regular updates through the Dashboard.</p>

                </div>
                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Accessing Your Information</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>You have the right to access the information we hold about you, and you have the right to update and/or correct your information. If you wish to access the information that we have about you, then a written request has to be sent to us in writing. In order to protect your information, we will require identification from you before releasing the requested information.</p>

                </div>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Exporting, Removing & Deleting Your Information</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>You have the option to export a copy of the information we store about you whenever you would like via the Dashboard.</p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        You can export your information via the Dashboard, and deletion options include specific profiles or the entire Apprecial account. Requests to remove content from a specific service will be honoured according to applicable laws and policies.
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        We will not charge you any fee for this export of information and/or access request but may charge an administrative fee for providing a copy of your information, as the case may be.
                    </p>
                </div>
                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Sharing Your Information</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>When you share your information:</p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Most Apprecial products allow you to share information with other people, but this still gives you full control over what and how you share.
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        In situations where you share information publicly, your content may become accessible through search engines. When you are using our products, any actions like making comments or directly messaging somebody, your username and your avatar/photo will appear next to your activity
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Apprecial will never share your personal information with external 3rd parties or organisations except in the following circumstances:
                    </p>
                    <ul className='flex flex-col gap-1'>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> a) to our subsidiaries and affiliates;</li>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> b) to service providers, retailers and other third parties we use to support our business, like payment gateways;</li>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> c) to fulfil the purpose for which you provide it, that is, for the Apprecial’s product use; </li>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> d) for any other purpose disclosed by us when a user provides the information;</li>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> e)  with your consent in any other cases;</li>
                        <li className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}> f)  if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to meet any applicable law, regulation, legal process, or enforceable governmental request. This also includes situations, which include but does not limit to enforcement of this Privacy Notice, which includes investigation of potential violations, detection, prevention or otherwise addressing fraud, security or technical issues; protecting against harm to the rights, property or safety of users or public as required or permitted by law.</li>
                    </ul>

                </div>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Deleting of Your Information From Our System</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>Deleting of Your Information From Our System</p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        When your information is no longer needed for the purpose/product for which it was obtained, we will take reasonable steps to destroy or permanently de-identify this information. However, most of your information will be stored by us for a minimum of 2 years or, as the situation may be, whichever is earlier.
                    </p>

                </div>


                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Transfer of Data</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>Apprecial provides its products worldwide. Your information may be transferred to and maintained on computers located outside your state, province, country or other governmental jurisdiction where the data protection laws may differ from your jurisdiction.</p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        We primarily store and process your information in London, United Kingdom.
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        We will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy, and no transfer of your information will take place to an organisation or a country unless there are adequate controls in place, including the security of the data and other personal information as per the applicable data protection laws are in place.
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        When we receive a formal written complaint from you, we respond by contacting you. We work with the appropriate regulatory authorities, including local data protection authorities, to resolve any complaints regarding the transfer of your data that we cannot resolve with you directly.
                    </p>

                </div>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Change in Privacy Notice</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>We may update our Privacy Notice from time to time. We will notify you of any changes by posting the new Privacy Notice on this page. We will inform you before the change becomes effective and update ‘last updated’ at the top of this Privacy Notice. You are advised to review this Privacy Notice periodically for any changes. Changes to this Privacy Notice are effective when they are posted on this page.</p>


                </div>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Privacy Protection Worldwide</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>Apprecial provides its products worldwide; therefore, we make an effort to abide by the privacy protection laws maintained throughout these jurisdictions.</p>

                </div>

                <div className='space-y-1'>
                    <h4 className='text-xl font-medium'>Complaints & Enquiries</h4>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' }`}>If you want to know about your rights or avail your rights or need to resolve any queries, you can email, call or write to our data protection department. Following are the details:</p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        Apprecial Data Protection and Privacy Department
                    </p>
                    <p className='text-[#011D41]/50 pt-3'>
                        Email: <a href="mailto:support@apprecial.com" className='underline'>support@apprecial.com</a>
                    </p>
                    <p className={`font-normal text-base   ${isDark
              ? 'text-white/70' : 'text-[#011D41]/50' } pt-3`}>
                        If you have any queries or complaints about our Privacy Policy, please contact us at [<a href="mailto:support@apprecial.com" className='underline'>support@apprecial.com</a>]
                    </p>
                </div>

            </div>
        </>
    )
}  