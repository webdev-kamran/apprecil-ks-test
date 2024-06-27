"use client"
import { TbCheck, TbX } from 'react-icons/tb'
import Autoshield from '@/app/assets/audioshield/icons/AudioShield.svg'
import Pro from '@/app/assets/audioshield//icons/autoshield-pro.svg'
import PlanCampares from './PlanCampares'
const Plans = () => {
  const planCompares = [
    {
      title: 'Compare Plans',
      subtitle: 'Choose plan which is most suitable for you.',
      note:'To manage or cancel your subscription, please visit your Google Play subscriptions page at any time. You have full control over your subscription preferences.',
      features: [
        {
          feature: 'Standard Audio Adjustment',
          tooltip: 'Standard Audio Adjustment - AudioShield ensures your media playback is always at a safe volume by automatically lowering the device volume to prevent sudden loud noises. The default setting is volume 1, ensuring a comfortable listening experience.',
          freePlan: <TbCheck size={26} color='#609EF2' />,
          proPlan: <TbCheck size={26} color='#609EF2' />,
        },
        {
          feature: 'Battery Optimization',
          tooltip: 'Battery Optimization - AudioShield operates efficiently in the background, ensuring minimal battery consumption and a seamless user experience.',
          freePlan: <TbCheck size={26} color='#609EF2' />,
          proPlan: <TbCheck size={26} color='#609EF2' />,
        },
        {
          feature: 'Change Default Level',
          tooltip: 'Change Default Level - Upgrade to AudioShield Pro to customize the default volume level. Take full control and set the exact volume you desire for your media applications.',
          freePlan: <TbX size={26} color='#C2C2C2' />,
          proPlan: <TbCheck size={26} color='#609EF2' />,
        },
        {
          feature: 'App-Specific Volume',
          tooltip: 'App-Specific Volume - With AudioShield Pro, you can set specific volume levels for individual apps. Override the default setting and tailor the audio experience for each app. If no specific volume is set, AudioShield will default to your customized level.',
          freePlan: <TbX size={26} color='#C2C2C2' />,
          proPlan: <TbCheck size={26} color='#609EF2' />,
        },
        {
          feature: 'Exclude Apps',
          tooltip: 'Exclude Apps - Don’t need AudioShield for every app? Upgrade to Pro and selectively disable AudioShield for chosen apps, giving you precise control over where the app intervenes.',
          freePlan: <TbX size={26} color='#C2C2C2' />,
          proPlan: <TbCheck size={26} color='#609EF2' />,
        },
        {
          feature: 'Schedule',
          tooltip: 'Schedule - Only need AudioShield during specific times? Use the scheduling feature to activate AudioShield during designated hours, ensuring protection when you need it most.',
          freePlan: <TbX size={26} color='#C2C2C2' />,
          proPlan: <TbCheck size={26} color='#609EF2' />,
        },
        {
          feature: 'Import/Export Settings',
          tooltip: 'Import/Export Settings - Switching to a new device? Pro users can easily import and export their customized settings, ensuring a smooth transition and consistent audio control across devices.',
          freePlan: <TbX size={26} color='#C2C2C2' />,
          proPlan: <TbCheck size={26} color='#609EF2' />,
        }, 
      ],

      plans: [
        {
          icon: Autoshield,
          title: 'Free',
          price: '£0.00',
          term: "Month",
        },
        {
          icon: Pro,
          title: 'Pro',
          price: '£0.99',
          term: "Month",
        },

      ],
      plansDiscount: [
        {          
          
          price: '',
          actualPrice:'',
          term: '',
          saving:false,
          savingValue:'0'
        },
        {          
         
          price: '£9.99',
          actualPrice:'£11.88',
          term: "/ Year",
          saving:true,
          savingValue:'16%'
        },

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

export default Plans