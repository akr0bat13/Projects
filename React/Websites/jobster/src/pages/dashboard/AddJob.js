import {FormRow, FormRowSelect} from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {clearValues, handleChange, createJob} from '../../features/job/jobSlice'

const AddJob = () => {

  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields')
      return
    }
    dispatch(createJob({position, company, jobLocation, jobType, status}))
  }

  const handleJobInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    dispatch(handleChange({name, value}))
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>
          {isEditing ? 'edit job' : 'add job'}
        </h3>
        <div className="form-center">

          {/* position */}
          <FormRow type='text' name='position' value={position} handleChange={handleJobInput} />

          {/* company */}
          <FormRow type='text' name='company' value={company} handleChange={handleJobInput} />

          {/* jobLocation */}
          <FormRow type='text' name='jobLocation' labelText='job location' value={jobLocation} handleChange={handleJobInput} />

          {/* status */}
          <FormRowSelect name='status' value={status} handleChange={handleJobInput} list={statusOptions} />
          
          {/* jobtype */}
          <FormRowSelect name='jobType' labelText='job type' value={jobType} handleChange={handleJobInput} list={jobTypeOptions} />

          <div className="btn-container">
            <button className='btn btn-block clear-btn' type='button' onClick={() => dispatch(clearValues())}>clear</button>
            <button className='btn btn-block submit-btn' type='submit' onClick={handleSubmit} disabled={isLoading}>submit</button>
          </div>
        </div>
      </form>
    </Wrapper>
  ) 
}

export default AddJob