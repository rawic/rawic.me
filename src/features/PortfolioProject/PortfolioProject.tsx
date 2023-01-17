import * as stylesPortfolio from './portfolio.module.sass';
import { PortfolioProjectProps } from './PortfolioProject.types';

export const PortfolioProject = (props: PortfolioProjectProps) => (
    <li className={stylesPortfolio.singleProject}>
        <div>
            <img
                className={`${stylesPortfolio.logo} ${stylesPortfolio[props.name]}`}
                src={props.src}
                alt={props.company}
            />
        </div>
        {props.isPersonal ? <span className={stylesPortfolio.personal}>Własny projekt</span> : ''}
    </li>
);
