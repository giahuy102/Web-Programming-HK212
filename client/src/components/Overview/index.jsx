import "./style.css";
export default function Overview() {
  const contentStyle = {
    width: '90%',
    margin: '0 auto',
    marginTop: 60,
    backgroundColor: 'white',
    fontSize: 25,
    textAlign: 'justify',
    height: "fit-content",
    textAlign: 'center'
  }
  return (
    <div className="container" style={{ maxWidth: 2000, height: '100vh' }}>
      <h1 style={{ paddingTop: 60, color: '#1570EF', fontWeight: 'bold', width: 'fit-content', margin:' 0 auto' }} className="title">Welcome to BKRestaurant</h1>
      <div className="content" style={contentStyle}>
        <p>
          BKRestaurant has been successfully owned and operated since 1984 and welcomes you to drop by and join the locals in our fun and friendly atmosphere. We are located close to the beach in Santa Barbara, California.

          <br></br>Our goal is to offer great homemade food at a reasonable price while maintaining great quality and service. Enjoy a selection of appetizers, sandwiches, fresh seafood, steak, pastas, fresh salads, homemade desserts and daily specials, including everything from classic favorites to modern cuisine. We offer a full bar.

          <br></br>Come join us for breakfast, lunch or dinner and dine on our outdoor patio or in the newly remodeled dining room.
        </p>
      </div>
    </div>

  );
}