import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as personalProjectStyles from './personal-project.module.sass';
import { PersonalProjectProps } from './PersonalProject.types';

export const PersonalProject = (props: PersonalProjectProps) => {
    const { t } = useTranslation('', {
        keyPrefix: 'personal-projects',
    });

    const data = useStaticQuery(graphql`
        {
            rootwoodstudio: file(relativePath: { eq: "in-progress/root-wood-studio.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
            dribbi: file(relativePath: { eq: "in-progress/dribbi.jpg" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    `);

    const image = getImage(data[props.slug])!;

    return (
        <article className={personalProjectStyles.personalProject}>
            <figure className={personalProjectStyles.image}>
                <GatsbyImage image={image} alt="" />
            </figure>
            <div className={personalProjectStyles.content}>
                <header>
                    {props.isFeatured ? (
                        <span className={personalProjectStyles.featured}>{t('featured')}</span>
                    ) : (
                        ''
                    )}
                    <h3 className={personalProjectStyles.title}>{props.name}</h3>
                </header>

                <p className={personalProjectStyles.description}>{props.description}</p>

                <footer>
                    <ul className={personalProjectStyles.tagsUl}>
                        {props.tags.split(', ').map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    {props.githubUrl && (
                        <a
                            href={props.githubUrl}
                            className={personalProjectStyles.icon}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={brands('github')} />
                        </a>
                    )}
                    <a
                        href={props.url}
                        className={personalProjectStyles.icon}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={props.name}
                    >
                        <FontAwesomeIcon icon={solid('external-link')} />
                    </a>
                </footer>
            </div>
        </article>
    );
};
