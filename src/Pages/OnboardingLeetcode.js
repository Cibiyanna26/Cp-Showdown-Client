import React from "react"
import { useNavigate } from "react-router-dom"
const OnboardingLeetcode = () => {
    const navigate = useNavigate()
    return (
        <>
         <h1>Onboarding Leetcode</h1>
         <label htmlFor="LeetcodeId">Leetcode Username : </label>
         <input type="text" id="LeetcodeId"/>
         <button onClick={()=>{navigate('/codeforcesOnboarding')}}>Next -{">"}</button>
        </>
    )
}
export default OnboardingLeetcode;