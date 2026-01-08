export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-fade-in">
                        About <span className="text-primary cosmic-glow">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-0 animate-fade-in-delay-1"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column - Introduction */}
                    <div className="space-y-8 opacity-0 animate-fade-in-delay-2">
                        <div className="cosmic-card p-8">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground hover:scale-[1.02]">
                                Passionate <span className="text-primary">Full Stack Developer</span>
                            </h3>

                            <p className="text-lg text-muted-foreground leading-relaxed hover:scale-[1.02]">
                                I specialize in building responsive, accessible, and high-performance web
                                applications using modern technologies. My focus is on creating clean,
                                scalable solutions that deliver seamless user experiences across devices.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed mt-6 hover:scale-[1.02]">
                                I'm passionate about creating elegant solutions to complex problems, and
                                I'm constantly learning new technologies and techniques to stay at the
                                forefront of the ever-evolving web landscape.
                            </p>

                            <div className="flex justify-center mt-8">
                                <a href="#contact" className="cosmic-button">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Education */}
                    <div className="space-y-8 opacity-0 animate-fade-in-delay-3 mb-8 mt-8">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                                Education
                            </h3>
                        </div>

                        {/* Education Timeline */}
                        <div className="space-y-3 relative">
                            {/* Timeline line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-primary/10 hidden md:block"></div>

                            {/* University Education */}
                            <div className="cosmic-card p-6 relative group hover:scale-[1.02] transition-all duration-300">
                                <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <span className="text-primary font-bold text-lg">🎓</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-foreground mb-2">
                                            Andhra University College of Engineering
                                        </h4>
                                        <p className="text-primary font-semibold text-lg mb-1">
                                            B.Tech - Computer Science and Engineering
                                        </p>
                                        <p className="text-muted-foreground mb-0">2021 - 2025</p>
                                        <div className="flex items-center gap-2 text-sm mt-0">
                                            <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                                                CGPA: 7.98
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Junior College */}
                            <div className="cosmic-card p-6 relative group hover:scale-[1.02] transition-all duration-300  ">
                                <div className="absolute -left-2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <span className="text-primary font-bold text-lg">📚</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-foreground mb-2">
                                            Sri Chaitanya Junior College
                                        </h4>
                                        <p className="text-primary font-semibold text-lg mb-1">
                                            Intermediate Education (MPC)
                                        </p>
                                        <p className="text-muted-foreground mb-2">2019 - 2021</p>
                                        <div className="flex items-center gap-4">
                                            <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30 text-sm">
                                                Percentage: 94%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


