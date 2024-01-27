import Header from "./Header/Header"

const Home = () => {
    const contents = [
        {
            title: "Registration"
        },
        {
            title: "Book An Appointment"
        },
        {
            title: "Meet The Doctor"
        }
    ]
    return (
        <div>
            <Header />

            <div style={{ width: "100%", background: `url("/assets/bg2.png") rgba(0,0,0,0.05) no-repeat`, minHeight: "100vh", backgroundSize: "cover", backgroundPosition: "center", backgroundBlendMode: "darken" }}>
                <div style={{ width: "80%", margin: "auto", padding: "60px 0" }}>
                    <h1 style={{ fontWeight: "600" }}>Welcome To Doctor Appointment System</h1>
                    <h2 style={{ fontWeight: "600" }}>Here you book your Appointment</h2>
                </div>

                <div style={{ width: "50%", margin: "20px auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h2>Want To Book An Appointment</h2>
                </div>

                <div style={{ margin: "80px 0", width :"100%", padding : "50px 0" }}>
                    <div style={{ width: "80%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        {
                            contents.map((c, index) => (
                                <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "250px", width: "400px", border: "2px solid black", background :"white" }}>
                                    <h2>{c.title}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
