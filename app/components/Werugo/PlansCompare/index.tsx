
"use client"
import { TbCheck, TbX } from 'react-icons/tb'
import Basic from '@/app/assets/werugo/images/plans/icon-basic.svg'
import Premium from '@/app/assets/werugo/images/plans/icon-premium.svg'
import Family from '@/app/assets/werugo/images/plans/icon-family.svg'
import PlanCampares from './PlanCampares'
const PlanCampare = () => {
    const planCompares = [
        { title: 'Compare Plans',
          features: [
            {
              feature: 'Voice Recognition',
              tooltip: 'Enable voice recognition using pre-set customised phrases or a simple "Werugo" command. This action will trigger your device, allowing you to locate It’s current location. Usefully, this feature works even in a "do not disturb" mode.',
              basicplan: <TbCheck size={26} color='#39AE56' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Dashboard Access (Real-Time)',
              tooltip: 'Monitor your device’s whereabouts in real-time, access its complete location history and perform various remote actions.',
              basicplan: <TbCheck size={26} color='#39AE56' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Uninstall Defence',
              tooltip: 'This feature prevents Werugo from being uninstalled. If an uninstallation attempt is made, the app will trigger the front camera to capture a picture and prompt the user for a PIN to gain access (Android only).',
              basicplan: <TbCheck size={26} color='#39AE56' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Hide Werugo',
              tooltip: 'Even though Werugo is constantly accessing your device’s location, we have optimised the app to run as efficiently as possible and use the least amount of battery possible.',
              basicplan: <TbCheck size={26} color='#39AE56' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Battery Optimization',
              tooltip: 'Even though Werugo is constantly accessing your device’s location, we have optimised the app to run efficiently and use the least battery possible.',
              basicplan: <TbCheck size={26} color='#39AE56' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Safezone Markers',
              tooltip: 'Establish your own Safezone markers to keep your device(s) within a certain range. If your devices happen to move out of this range, you’ll be notified immediately.',
              basicplan: <TbCheck size={26} color='#39AE56' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Movement Detection',
              tooltip: 'Stay informed about your device’s movement with our movement detection feature. You’ll receive an instant notification whenever your device is in motion.',
              basicplan: <TbCheck size={26} color='#39AE56' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Location History/Records',
              tooltip: 'As Werugo keeps track of your device, you can gain access to a comprehensive record of all routes your device has taken over time. Our advanced interface enables you to filter data by day, hour, or month and our inbuilt heat map will show you the peak times that registered the most activity.',
              basicplan: <TbCheck size={26} color='#39AE56' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Location Stats',
              tooltip: 'For the best precision in location accuracy, Werugo can provide you with the exact coordinates of your device, along with nearby public places.',
              basicplan: <TbCheck size={26} color='#39AE56' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Lockout Message',
              tooltip: 'Deter potential thieves with a custom lockout message. This distraction technique will allow you to discreetly access your phone in the background remotely.',
              basicplan: <TbX size={26} color='#C2C2C2' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Automation (Rules)',
              tooltip: 'Configure personalised rules that are triggered by actions. For example, 2 incorrect passcode attempts could trigger the front-facing camera, capturing an image of an unauthorised user. Any captured media will be uploaded to the "Files" tab and stored for 30 days on the Dashboard. You can also set up other rules such as initiating audio recording or activating an alarm.',
              basicplan: <TbX size={26} color='#C2C2C2' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
            {
              feature: 'Group Devices (Bulk Action)',
              tooltip: 'This feature assigns all of your devices to a group and allows you to perform bulk actions that will apply to all of your devices at once.',
              basicplan: <TbX size={26} color='#C2C2C2' />,
              premiumplan: <TbCheck size={26} color='#39AE56' />,
              familyplan: <TbCheck size={26} color='#39AE56' />,
            },
          ],
    
          plans: [      
            
                {
                  icon: Basic,
                  title: 'Basic',
                  price: '£2.49',
                  term: "Month",
                },
              
                {
                  icon: Premium,
                  title: 'Premium',
                  price: '£4.99',
                  term: "Month",
                },
             
             
                {
                  icon: Family,
                  title: 'Family',
                  price: '£9.99',
                  term: "Month",
                }      
             
          ]
        }
      ]

      return (
        <>
         {planCompares.map((plan, index) => (
                    <PlanCampares key={index} plan={plan} />
        ))}
        </>
      )

}

export default PlanCampare