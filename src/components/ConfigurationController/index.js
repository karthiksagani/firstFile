// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const getContentValue = () => {
        onToggleShowContent()
      }

      const getLeftNavBarValue = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const getRightNavBarValue = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div>
          <h1>Layout</h1>
          <div>
            <div>
              <input
                checked={showContent}
                id="content"
                onChange={getContentValue}
                type="checkbox"
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                checked={showLeftNavbar}
                onChange={getLeftNavBarValue}
                id="Left Navbar"
                type="checkbox"
              />
              <label htmlFor="Left Navbar">Left Navbar</label>
            </div>
            <div>
              <input
                checked={showRightNavbar}
                onChange={getRightNavBarValue}
                id="Right Navbar"
                type="checkbox"
              />
              <label htmlFor="Right Navbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
