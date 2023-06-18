import Layout from '../../components/layout/layout'

import Home from '../../components/home'
import Header from '../../components/header'

function HomePage() {
  return (
    <div className="App">
      <Layout
        Header={<Header/>}
        mainContent={<Home/>}
      />
    </div>
  )
}

export default HomePage
