import React from 'react'

const Categories = (props) => {
    return (
        <div className={"container m-3"}>
            <div className={"row mb-3 text-center"}>
                <div className={"col-12"}>
                    <h4>Book categories</h4>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-12"}>
                    <table className={"table table-sm table-hover"}>
                        <thead>
                            <tr>
                                <th scope={"col"}>Category name</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.categories.map((category) => {
                            return (
                              <tr>
                                  <td>{category}</td>
                              </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Categories
