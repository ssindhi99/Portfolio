
import EducationalSection from './Resume/EducationalSection'
import ExperienceSection from './Resume/ExperienceSection'
import HeaderSection from './Resume/HeaderSection'
import ObjectiveSection from './Resume/ObjectiveSection'
import PersonalInfoSection from './Resume/PersonalInfoSection'
import PreviousexpSection from './Resume/PreviousexpSection'
import SkillsSection from './Resume/SkillsSection'

function ResumeIndex() {

  return (
    <>

    <div className='resume-section'>
    <HeaderSection/>    
    <PersonalInfoSection/>
    <ObjectiveSection/>
    <EducationalSection />
    <ExperienceSection/>
    <PreviousexpSection/>
    <SkillsSection/>



    </div>
    </>
  )
}

export default ResumeIndex
