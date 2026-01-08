import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Pentapalli </span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-2">Harishik</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-8 opacity-0 animate-fade-in-delay-4">
                    I'm a passionate Full Stack Developer
                    skilled in building responsive and scalable
                    web applications using HTML, CSS, JavaScript,
                    React, Node.js, Next.js and MongoDB. I focus on
                    writing clean, efficient code and delivering
                    seamless user experiences from front-end to
                    back-end.
                </p>

                <div className="mt-8 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button opacity-0 animate-fade-in-delay-4">
                        View My Work
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foregroud mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
            </div>
        </section>
    )
}