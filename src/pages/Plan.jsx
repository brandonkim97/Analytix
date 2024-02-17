import { useCallback, useState } from "react";
import Header from "../components/Header";
import PlanChoice from "../components/plan/PlanChoice";
import { toast } from 'react-toastify';

const Plan = () => {
    const [plan, setPlan] = useState('personal');
    const [loading, setLoading] = useState(false);

    const handleSetPlan = useCallback((plan) => {
        const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
        toast.promise(
            resolveAfter3Sec,
            {
              pending: {
                render() {
                    setLoading(true);
                    return 'Changing plan...';
                }
            },
              success: {
                render() {
                    setLoading(false);
                    setPlan(plan);
                    return 'Plan changed! 👌';
                }
            },
              error: {
                render() {
                    setLoading(false);
                    return 'Your plan could not be changed. Please try again 🤯';
                }
              }
            }
        )
    }, []);

    const personalPlan = {
        'icon': '😆',
        'title': 'Personal',
        'subtitle': 'Perfect plan for starters',
        'price': 'Free',
        'price_subtitle': 'For a lifetime',
        'plan_details': [
            'Detailed post analytics', 
            'Share with 5 team members',
            'Sync across devices',
            'Reach and impressions analytics',
            'Up to 6 social profiles'
        ]
    }

    const professionalPlan = {
        icon: '🎉',
        'title': 'Professional',
        'subtitle': 'For users who want to do more',
        'price': '$99',
        'price_subtitle': 'For a lifetime',
        'plan_details': [
            'Detailed post analytics', 
            'Unlimited team members',
            'Sync across devices',
            'Reach and impressions analytics',
            'Up to 10 social profiles'
        ]
    }

    const enterprisePlan = {
        'icon': '🚀',
        'title': 'Enterprise',
        'subtitle': 'Analyze your company',
        'price': '$499',
        'price_subtitle': 'For a lifetime',
        'plan_details': [
            'Detailed post analytics', 
            'Unlimited team members',
            'Sync across devices',
            'Reach and impressions analytics',
            'Unlimited social profiles'
        ]
    }

    return (
        <div>
            <Header />
            <div className="text-3xl mb-10 text-center md:text-start">Plan & Pricing</div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                    <PlanChoice 
                        data={personalPlan} 
                        isActive={plan === 'personal'} 
                        onClick={() => handleSetPlan('personal')}
                        pending={loading}
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <PlanChoice 
                        data={professionalPlan} 
                        isActive={plan === 'professional'} 
                        onClick={() => handleSetPlan('professional')}
                        pending={loading}
                    />
                </div>
                <div className="w-full md:w-1/3">
                    <PlanChoice 
                        data={enterprisePlan} 
                        isActive={plan === 'enterprise'} 
                        onClick={() => handleSetPlan('enterprise')}
                        pending={loading}
                    />
                </div>
            </div>
        </div>
    )
}

export default Plan;