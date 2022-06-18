export const navBarVariant = {
    initial: { y: "100%" },
    animate: { y: "0%", transition: { duration: 1 }}
}

export const homeDetailsVariants = {
    initial: { y: "-100%" },
    animate: { y: "0%", transition: { duration: 1}},
    exit: { opacity: 0, transition: { duration: 5 } }
}

export const scrollDownVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 1 } }
}

export const scrollVariant = {
    animate: { y: "-50%", transition: { yoyo: Infinity, duration: 0.5 } }
}