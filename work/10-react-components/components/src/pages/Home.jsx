import ScarfCatImage from '../images/scarf-cats.jpg';
import BasketCatImage from '../images/basket-cats.jpg';

const Home = () => (
  <main id="main" className="container">
    <section className="panel">
      <img src={ScarfCatImage} alt="Cat Wears Scarf" className="panel-img right" />
      <h2>The Fashionable Scarf Cat: A Trendsetter in the Feline World</h2>
      <p>
        Scarf Cat has taken the internet by storm with its unique sense of style and charming personality.
        This adorable feline is often seen sporting a variety of scarves, each one adding a touch of flair
        to its already captivating presence. Whether it's a cozy knit scarf for winter or a colorful silk scarf
        for summer, Scarf Cat knows how to make a statement. Beyond its fashion sense, this cat is known for its
        playful antics, often engaging in fun activities that showcase its lively spirit. From chasing after toys
        to lounging in sunbeams, Scarf Cat embodies the joy and playfulness that all cats bring into our lives.
        With a growing fanbase on social media, this fashionable feline continues to inspire cat lovers everywhere
        to embrace their own unique styles.
      </p>
    </section>
    
    <section className="panel">
      <img src={BasketCatImage} alt="Cat in the Basket" className="panel-img left" />
      <h2>Basket Cat: The Royalty of Comfort and Relaxation</h2>
      <p>
        Known affectionately as the "Cat King," Basket Cat reigns supreme in the realm of internet fame. This
        regal feline has a penchant for lounging in baskets, where it looks both majestic and utterly relaxed.
        With its fluffy fur and serene demeanor, Basket Cat has become a symbol of comfort, reminding us all of
        the importance of taking time to unwind. Often captured in various adorable poses, this cat has charmed
        its way into the hearts of many. Whether it's curled up in a cozy basket or playfully batting at a toy,
        Basket Cat exemplifies the perfect blend of grace and playfulness. Its popularity has led to countless
        memes and fan art, celebrating the joy this cat brings to its followers. As we watch Basket Cat enjoy its
        leisurely life, we are inspired to find our own moments of relaxation and joy amidst the hustle and bustle
        of daily life.
      </p>
    </section>
  </main>
);

export default Home;