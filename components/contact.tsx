export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 lg:pl-80 lg:pr-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="border-l-2 border-primary pl-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Get in Touch</h2>
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest">Let's work together</p>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always open to new opportunities, collaborations, and interesting projects. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="mailto:kadirid9@gmail.com"
              className="p-6 bg-card/50 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="text-sm text-muted-foreground mb-2">Email</div>
              <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                kadirid9@gmail.com
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/kadiri-daniel-3a6abb260/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-card/50 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <div className="text-sm text-muted-foreground mb-2">LinkedIn</div>
              <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Connect with me
              </div>
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/khadii"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Visit GitHub
            </a>
            <a
              // href="https://twitter.com".
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Follow on Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
