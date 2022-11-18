import Link from "next/link";

export default function imageWysiwyg(props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
    const { href, children } = props;

    const isExternal =
        typeof href === "string" && (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

    if (isExternal) {
        return (
            <a href={href}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href ? href : '#'} passHref>
            {children}
        </Link>
    );
}
