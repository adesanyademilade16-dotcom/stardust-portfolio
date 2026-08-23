import { Reveal } from '@/components/ui/Reveal';
import { testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section id="testimonials" className={styles.section} aria-label="Client feedback">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-index" aria-hidden="true">
              05
            </span>
            <h2 className="text-h2">Client Feedback</h2>
          </div>
          <p className={`text-body ${styles.headerCopy}`}>
            A few words from people who commissioned the work above — on turnaround, clarity, and how the final piece performed.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 90} className={styles.card}>
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <p className={`text-editorial-quote ${styles.quote}`}>{testimonial.quote}</p>
              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">
                  {testimonial.initials}
                </span>
                <span className={styles.personText}>
                  <p className={`text-h4 ${styles.name}`}>{testimonial.name}</p>
                  <p className={`text-caption ${styles.role}`}>{testimonial.role}</p>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
