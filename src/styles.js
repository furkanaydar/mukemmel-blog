const Styles = {
  blog: {

    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
    fontSize: 16,
    fontWeight: 'lighter',
    padding: 48,
    marginBottom: 32,
    margin: '0 auto',
    marginTop: 20,
    borderRadius: 3,
    width: '80%',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)'
  },
  container: {
    maxWidth: 1000,
    margin: '0 auto',
    
  },
  blogPostsContainer: {
    margin: '0 auto',

  },
  blogText: {
    marginBottom: 32
  },
  blogTitle: {
    letterSpacing: 2.2,
    fontWeight: 'lighter',
    fontFamily: 'Gelasio, serif',
    color: 'black',
    textDecoration: 'none'
  },
  blogImage: {
    width: '100%',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  },

  blogDate: {
    textAlign: 'right',
    alignSelf: 'stretch',
    color: '#cccccc'
  },
  blogFooter: {
    marginTop: 30,
    display: 'flex'
  },
  tagContainer: {
    marginBottom: 12,

  },

  hero: {
    fontFamily: 'Noto Sans KR, serif',
    letterSpacing: 5,
    textAlign: 'center',
    marginTop: '72px',
    boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
    padding: '20px',
    borderRadius: 5,
    //backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
    backgroundImage: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    //backgroundImage: 'linear-gradient(to right, #000000, #434343)',
    //backgroundImage: 'linear-gradient(to right, #005c97, #363795)',
    //backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
    //fallback background color
    backgroundColor: '#0f2027',
  },
  socialLink: {
    marginRight: 32,
  },
  title: {
    color: 'white',
    fontSize: '36px'
  },
  a: {
    color: 'white',
    fontSize: '20px',
    textDecoration: 'none',
  },
  linkContainer: {
    padding: 5,
    width: '100%',
  },
  tabsSection: {
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    marginTop: 32,
    justifyContent: 'space-between',
    display: 'flex',
    width: '72%'
  },
  tab: {
    width: '100%',
    padding: 8,
    verticalAlign: 'middle',
    fontFamily: 'PT Sans, serif',
    border: 'none',
    outline: 'none',
    borderBottom: 'none',

    letterSpacing: 4,
    fontSize: '12px',
    borderBottom: 'none',
  },

  activeTab: {
    width: '100%',
    padding: 8,
    verticalAlign: 'middle',
    //backgroundColor: '#001f3f',
    backgroundImage: ' radial-gradient( circle 919px at 1.7% 6.1%,  rgba(41,58,76,1) 0%, rgba(40,171,226,1) 100.2% )',
    borderBottom: 'none',
    fontFamily: 'PT Sans, serif',
    color: 'white',
    border: 'none',
    outline: 'none',
    letterSpacing: 4,
    fontSize: '12px',
  },
  aboutMeContainer: {
    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
    fontSize: 16,
    fontWeight: 'lighter',
    padding: 48,
    marginBottom: 32,
    margin: '0 auto',
    width: '80%',


  },
  aboutMeImage: {
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
    borderRadius: '200px',
  },
  aboutMeImageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '200px',
    margin: 'auto'
  },
  commentBox: {
    fontFamily: 'Domine, "Times New Roman", Times, serif',
    fontSize: 16,
    fontWeight: 'lighter',
    padding: 12,
    marginBottom: 32,
    paddingBottom:32,
    margin: '0 auto',
    marginTop: 20,
    borderRadius: 8,
    width: '64%',
    backgroundColor: 'whitesmoke',
    fontWeight: 'lighter',
    border: 'none',
    boxShadow: '0 2px 3px 0px rgba(0, 0, 0, 0.16)'


  }
}
export default Styles