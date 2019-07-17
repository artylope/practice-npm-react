var React = require('react');

class MyForm extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>my form</h1>

            <form action="/hello" method="POST">
                <input name="wow"/>
                <input type="submit"/>

            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = MyForm;
