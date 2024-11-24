import _ from 'lodash';
import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";


function Pagination(props) {


    const {pageCount} = props;

    const params = useParams();
    const currentPage = params.page || 1;


    return (
        <div className="shop_pagination_area wow fadeInUp" data-wow-delay="1.1s"
             style={{visibility: 'visible', animationDelay: '1.1s', animationName: 'fadeInUp'}}>
            <nav aria-label="Page navigation">
                <ul className="pagination pagination-sm">

                    {_.range(1, pageCount + 1).map(item => (
                        <li key={item} className={`page-item ${currentPage === item ? 'active' : ''}`}>
                            <Link className="page-link" to={`/shop/${item}`}>{item}</Link>
                        </li>
                    ))}

                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
