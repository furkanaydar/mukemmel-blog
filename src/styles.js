


const Styles = {
  mama: {
    justifyContent: 'space-between',
    display: 'flex',
    //backgroundImage: "url(" + `${require("./images/nack4.jpg")}` + ")"
  },
  blog: {
    
    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
    fontSize: 16,
    fontWeight: 'lighter',
    padding: 48,
    marginBottom: 32,
    margin: '0 auto',
    marginTop: 20,
    borderRadius: 3,
    width: '75%',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)'
  },
  container: {
    maxWidth: '960px',
    marginLeft: '8%',
    //backgroundImage: "url(" + `${require("./images/back3.jpg")}` + ")",
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
  tagStyle: {
    fontFamily: 'PT Sans, serif',
    textTransform: 'uppercase',
    letterSpacing: 4,
    fontSize: '12px',
    background: '#eee',
    borderRadius: '3px 0 0 3px',
    color: '#999',
    paddingLeft:12,
    paddingRight:12,
    display: 'inline-block',
    height: '26px',
    lineHeight: '26px',
    position: 'relative',
    margin: '0 10px 10px 0',
    textDecoration: 'none',
    boxShadow: '0px 0px 2px rgba(0,0,0,0.14)',
    cursor: 'default'
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
    width: '84%'
  },
  tab: {
    width: '100%',
    padding: 6,
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
    paddingBottom: 32,
    margin: '0 auto',
    marginTop: 20,
    borderRadius: 8,
    width: '64%',
    backgroundColor: 'whitesmoke',
    fontWeight: 'lighter',
    border: 'none',
    boxShadow: '0 2px 3px 0px rgba(0, 0, 0, 0.16)'
  },

  sortSection: {
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    margin: 'auto',
    marginTop: 12,
    justifyContent: 'space-between',
    display: 'flex',
    width: '70%',
    padding: 10,
  },

  searchBarContainer: {
    width: '50%',
  },
  searchBar: {
    width: '80%',
    letterSpacing: 1.4,
    borderRadius: 12,
    border: '1px solid rgba(0, 0, 0, 0.16)',
    padding: 8,
    paddingLeft: 10,
    fontFamily: 'PT Sans, serif',
  },
  dropdownContainer: {
    width:'30%',
    cursor: 'pointer',
  },
  dropdown: {
    letterSpacing: 1.4,
    borderRadius: 12,
    border: '1px solid rgba(0, 0, 0, 0.16)',
    textAlign: 'center',
    padding: 6,
    paddingRight: 6,
    paddingLeft: 6,
    fontSize:12,
    color: 'grey',
    fontFamily: 'PT Sans, serif',
  },

  adminLoginContainer: {
    boxShadow: '0 2px 3px 0px rgba(0, 0, 0, 0.16)',
    border: '1px solid rgba(0, 0, 0, 0.16)',
    margin: 'auto', 
    width: '30%', 
    padding: 32, 
    textAlign: 'center', 
    marginTop: '10%'
  },

  inputField: {
    width: '80%',
    backgroundColor: 'whitesmoke', borderRadius: 8,
    border: 'none', boxShadow: 'none', outline: 'none',
    padding: 12,
    marginBottom: 20,
  },

  adminButtonStyle: {
    marginTop: 32,
    width: '25%',
    letterSpacing: 3,
    cursor: 'pointer',
    padding: 8,
    borderRadius: 6,
    fontSize: 11,
    marginRight:12,
    fontFamily: 'Tahoma, serif',
    border: '2px solid #001f3f',
    background: 'white',
  },

  createArticleContainer: {
    boxShadow: '0 2px 3px 0px rgba(0, 0, 0, 0.16)',
    border: '1px solid rgba(0, 0, 0, 0.16)',
    margin: 'auto', 
    width: '50%', 
    padding: 32, 
    textAlign: 'center', 
    backgroundColor: 'whitesmoke',
  },
  createArticleTextArea: {
    minWidth: '72%',
    maxWidth: '72%',
    minHeight: 300,
    border: '3px solid #cccccc',
    padding: 5,
    fontFamily: 'Tahoma, sans-serif',
  },
  tagInput: {
    backgroundColor: '#cde69c',
    borderRadius: 2,
    border: '1px solid #a5d24a',
    color: '#638421',
    display: 'inline-block',
    fontSize: 13,
    fontWeight: 400,
    marginBottom: 5,
    marginRight: 5,
    padding: 5
  },
  homeButtonStyle: {
    marginTop: 32,
    width: '18%',
    letterSpacing: 3,
    fontWeight: 'bolder',
    padding: 4,
    borderRadius: 6,
    fontSize: 12,
    border: '1px solid #001f3f',
    fontFamily: 'PT Sans, serif',
  },

  seeMoreButtonStyle: {
    marginTop: 32,
    width: '16%',
    letterSpacing: 3,
    fontWeight: 'bolder',
    padding: 4,
    borderRadius: 6,
    fontSize: 12,
    border: '1px solid #001f3f',
    fontFamily: 'PT Sans, serif',
  },

  addCommentButtonStyle: {
    fontFamily: 'PT Sans, serif', 
    width: '72%', 
    margin: 'auto', 
    textAlign: 'center',
    marginTop: 20  
  },

  makeCommentFormName: {
    width: '80%',
    backgroundColor: 'whitesmoke', borderRadius: 8,
    border: 'none', boxShadow: 'none', outline: 'none',
    padding: 12,
    marginBottom: 20,
  },

  makeCommentFormDetails: {
    width: '80%',
    resize: 'none',
    letterSpacing: 1.4,
    backgroundColor: 'whitesmoke', borderRadius: 8,
    boxShadow: 'none',
    padding: 12
  },

  makeCommentFormButton : {
    marginTop: 32,
    width: '25%',
    letterSpacing: 3,
    fontWeight: 'bolder',
    padding: 4,
    borderRadius: 6,
    fontSize: 14,
    border: '1px solid #001f3f',
    fontFamily: 'PT Sans, serif',
  },

  paginatorPassiveItemStyle: {
    fontFamily: 'PT Sans, serif',
    userSelect: 'none',
    margin: 5,
    fontSize: 14,
    border: 'none',
    padding: 2,
    cursor: 'pointer',
    transition:'0.6s'
  },

  paginatorActiveItemStyle: {
    fontFamily: 'PT Sans, serif',
    userSelect: 'none',
    marginRight: 5,
    fontSize: 22,
    border: 'none',
    backgroundColor: 'lightblue',
    padding: 4,
    color: 'white',
    cursor: 'pointer',
    transition:'0.6s'
  }
}
export default Styles