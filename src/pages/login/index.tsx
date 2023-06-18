import Layout from '../../components/layout/layout'
import Login from '../../components/login'
import Header from '../../components/header'

function LoginPage() {
  return (
    <div className="App">
      <Layout
        Header={<Header/>}
        mainContent={<Login/>}
      />
    </div>
  )
}

export default LoginPage
