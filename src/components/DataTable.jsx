import React from 'react';

/**
 * Props
 * load: (page: int, items: int, orderby: {}, callback: data => void) => void
 * doAction: (action: {...}, done: (bool) => void) => void
 */
class DataTable extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            rows: [],
            headers: [],
            page: 1,
            pages: 1,
            items: 10,
            total: 0,
            orderBy: []
        }

    }

    componentWillMount(){
        this.load();
    }

    doAction(action) {
        this.props.doAction(action, result => this.load(result));
    }

    load(confirm = true) {

        if (!confirm) return;

        this.props.load(
            this.state.page,
            this.state.items,
            this.state.orderBy,
            data => {
                this.setState(state => ({
                    rows: data.rows,
                    headers: data.headers,
                    total: (data.total !== undefined) ? data.total : 0,
                    pages: (data.total !== undefined) ? Math.ceil(data.total / state.items) : 1
                }));
            }
        );

        /**
         * Protocolo:
         * request = {
         *  page: int,
         *  items: int,
         *  orderBy: [{
         *      header: string
         *      dir: "ASC" | "DESC"
         *  }]
         * }
         * 
         * response = {
         *  total: int,
         *  headers: [string]
         *  rows: [{
         *      cells: [any],
         *      actions: [{
         *          icon: string,
         *          className: string,
         *          title: string,
         *          url: string,
         *          method: "POST" | "PUT" | "GET" | "DELETE",
         *          confirm: bool,
         *          window: {
         *              props: {
         *                  title: string,
         *                  style: {...},
         *              }
         *              template: string,
         *              templateProps: {...}
         *          }
         *      }]
         *  }]
         * }
         * 
         */
    }

    orderBy(header) {
        this.setState(state => {
            const orderBy = [...state.orderBy];
            const sorter = orderBy.find(sorter => sorter.header === header);
            if (sorter) {
                if (sorter.dir === "DESC") {
                    return {
                        page: 1,
                        orderBy: orderBy.filter(item => item !== sorter)
                    };
                }
                else {
                    return {
                        page: 1,
                        orderBy: orderBy.map(item => (item === sorter) ? { ...sorter, dir: "DESC" } : item)
                    };
                }
            } else {
                return {
                    page: 1,
                    orderBy: [
                        ...orderBy,
                        {
                            header,
                            dir: "ASC"
                        }
                    ]
                };
            }
        });
        this.load();
    }

    setItems(items) {
        this.setState(state => ({ items, page: 1 }));
        this.load();
    }

    goToPage(page) {
        this.setState(state => ({ page }));
        this.load();
    }

    render() {
        const headers = this.state.headers.map((header, key) => {
            const sorter = this.state.orderBy.find(sorter => sorter.header === header);
            const sortButton = sorter ? (
                (sorter.dir === "ASC") ?
                    <i className="fa fa-sort-up"></i> :
                    <i className="fa fa-sort-down"></i>
            ) : null;

            return (
                <th className="fenestra-datatable-header" key={key} onClick={() => this.orderBy(header)}>
                    {sortButton}&nbsp;{header}
                </th>
            )
        });

        const rows = this.state.rows.map((row, key) => {
            const cells = row.cells.map((cell, key) =>
                <td key={key}>{cell}</td>
            );
            const actions = row.actions.map((action, key) =>
                <button title={action.title} className={action.className} key={key} onClick={() => this.doAction(action)}>
                    <i className={action.icon}></i>
                </button>
            );

            return (
                <tr key={key}>
                    {cells}
                    <td className="fenestra-datatable-actions">
                        {actions}
                    </td>
                </tr>
            );
        });

        const page = this.state.page;
        const pages = this.state.pages;
        const maxPages = 5;

        const pageMin = (pages > maxPages) ? ((page >= pages - maxPages / 2) ? pages - maxPages + 1 : Math.max(page - 2, 1)) : 1;
        const pageMax = (pages > maxPages) ? ((page >= pages - maxPages / 2) ? pages : Math.max(page + 2, maxPages)) : pages;

        const pageCount = pageMax - pageMin + 1;

        const pageButtons = new Array(pageCount).fill(null).map((item, key) => {
            const index = pageMin + key;
            return (
                <li key={key} className={"page-item " + ((page === index) ? "active" : "")}>
                    <button className="page-link" type="button" onClick={() => this.goToPage(index)}>
                        {index}
                    </button>
                </li>
            );
        });

        const reloadButton =
            <li className="page-item">
                <button className="page-link" type="button" onClick={() => this.load()}>
                    <i className="fa fa-refresh"></i>
                </button>
            </li>;

        const startButton = (page !== 0) ? (
            <li key="5" className={"page-item " + ((page === 1) ? "disabled" : "")}>
                <button className="page-link" type="button" onClick={() => this.goToPage(1)}>
                    <i className="fa fa-fast-backward"></i>
                </button>
            </li>
        ) : null;

        const prevButton = (page !== 0) ? (
            <li key="6" className={"page-item " + ((page === 1) ? "disabled" : "")}>
                <button className="page-link" type="button" onClick={() => this.goToPage(page - 1)}>
                    <i className="fa fa-backward"></i>
                </button>
            </li>
        ) : null;

        const nextButton = (pages !== 0) ? (
            <li key="7" className={"page-item " + ((page === pages) ? "disabled" : "")}>
                <button className="page-link" type="button" onClick={() => this.goToPage(page + 1)}>
                    <i className="fa fa-forward"></i>
                </button>
            </li>
        ) : null;

        const endButton = (pages !== 0) ? (
            <li key="8" className={"page-item " + ((page === pages) ? "disabled" : "")}>
                <button className="page-link" type="button" onClick={() => this.goToPage(pages)}>
                    <i className="fa fa-fast-forward"></i>
                </button>
            </li>
        ) : null;

        const pageNavigation = (this.state.items > 0) ?
            [startButton, prevButton, pageButtons, nextButton, endButton]
            : null;

        const navigation = (
            <nav>
                <ul className="pagination d-flex justify-content-end pagination-sm">
                    {reloadButton}
                    <li className="page-item">
                        <select className="page-link fenestra-select" value={this.state.items} onChange={e => this.setItems(e.target.value)}>
                            <option value="10">10 itens</option>
                            <option value="20">20 itens</option>
                            <option value="50">50 itens</option>
                            <option value="100">100 itens</option>
                            <option value="0">Todos</option>
                        </select>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">
                            de {(page - 1) * this.state.items + 1} a {(this.state.items > 0) ? (page - 1) * this.state.items + this.state.rows.length : this.state.rows.length} {this.state.total ? "de " + this.state.total : ""}
                        </span>
                    </li>
                    {pageNavigation}
                </ul>
            </nav>
        );

        return (
            <div className="table-responsive">
                <table className="table table-sm table-hover table-striped">
                    <thead>
                        <tr>
                            {headers}
                            <th className="fenestra-datatable-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={this.state.headers.length + 1}>
                                {navigation}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default DataTable;