import Layout from '../../components/layout/layout'
import SignUp from '../../components/signup'
import Header from '../../components/header'

function SignUpPage() {
  return (
    <div className="App">
      <Layout
        Header={<Header/>}
        mainContent={<SignUp/>}
      />
    </div>
  )
}

export default SignUpPage
