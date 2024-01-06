CREATE TABLE book (
	id SERIAL PRIMARY KEY,
	isbn VARCHAR(30) NOT NULL UNIQUE,
	title VARCHAR(100) NOT NULL,
	notes TEXT NOT NULL,
	author VARCHAR (45),
	date DATE NOT NULL,
	rating SMALLINT NOT NULL
);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('978-1878424310', 'The Four Agreements: A Practical Guide to Personal Freedom', 'In The Four Agreements, bestselling author don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, The Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love.', 'Don Miguel Ruiz', '1997-11-01', 9);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('978-1585424337', 'Think and Grow Rich', 'Think and Grow Rich has been called the “Granddaddy of All Motivational Literature.” It was the first book to boldly ask, “What makes a winner?” The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world s winners himself. The most famous of all teachers of success spent “a fortune and the better part of a lifetime of effort” to produce the “Law of Success” philosophy that forms the basis of his books and that is so powerfully summarized in this one.', 'Napoleon Hill', '2007-12-15', 10);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES('978-0140280197', 'The 48 Laws of Power', 'In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum.', 'Robert Greene', '2000-09-01', 9);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('978-1-5247-6316-9', 'A Promised Land', 'In the stirring, highly anticipated first volume of his presidential memoirs, Barack Obama tells the story of his improbable odyssey from young man searching for his identity to leader of the free world, describing in strikingly personal detail both his political education and the landmark moments of the first term of his historic presidency—a time of dramatic transformation and turmoil.', 'Barack Obama', '2020-11-17', 10);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('9781838856281', 'Cacophony of Bone', 'Two days after the Winter Solstice in 2019 Kerri and her partner M moved to a small, remote railway cottage in the heart of Ireland. They were looking for a home, somewhere to stay put. What followed was a year of many changes. The pandemic arrived and their isolated home became a place of enforced isolation. It was to be a year unlike any we had seen before. But the seasons still turned, the swallows came at their allotted time, the rhythms of the natural world went on unchecked. For Kerri there was to be one more change, a longed-for but un-hoped for change.', 'Kerri ní Dochartaigh', '2023-11-14', 8);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('9780307377906', 'The Righteous Mind: Why Good People Are Divided by Politics and Religion', 'Why can’t our political leaders work together as threats loom and problems mount? Why do people so readily assume the worst about the motives of their fellow citizens? In The Righteous Mind, social psychologist Jonathan Haidt explores the origins of our divisions and points the way forward to mutual understanding.', 'Jonathan Haidt', '2012-03-13', 8);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('9781611803006', 'The Religion of Tomorrow', 'A provocative examination of how the great religious traditions can remain relevant in modern times by incorporating scientific truths learned about human nature over the last century.', 'Ken Wilber', '2017-05-02', 8);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('9780307352149', 'Quiet: The Power of Introverts in a World That Can t Stop Talking', 'At least one-third of the people we know are introverts. They are the ones who prefer listening to speaking; who innovate and create but dislike self-promotion; who favor working on their own over working in teams. It is to introverts—Rosa Parks, Chopin, Dr. Seuss, Steve Wozniak—that we owe many of the great contributions to society.', 'Susan Cain', '2012-01-24', 8);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('9780374275631', 'Thinking, Fast and Slow', 'In the highly anticipated Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities—and also the faults and biases—of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behavior. The impact of loss aversion and overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the challenges of properly framing risks at work and at home, the profound effect of cognitive biases on everything from playing the stock market to planning the next vacation—each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions.', 'Daniel Kahneman', '2011-10-25', 8);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('9781982120306', 'Truth Be Told: My Journey Through Life and the Law', 'Former Chief Justice of the Supreme Court of Canada Beverley McLachlin offers an intimate and revealing look at her life from her childhood in the Alberta foothills to her career on the Supreme Court, where she helped to shape the social and moral fabric of the country.', 'Beverley McLachlin', '2019-09-24', 8);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('9781627792127', 'Six of Crows', 'Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone...', 'Leigh Bardugo', '2023-01-01', 8);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('978-1936891023', 'The War of Art: Break Through the Blocks and Win Your Inner Creative Battles', 'A succinct, engaging, and practical guide forsucceeding in any creative sphere, The War ofArt is nothing less than Sun-Tzu for the soul.', 'Steven Pressfield', '2012-01-11', 9);

INSERT INTO book (isbn, title, notes, author, date, rating)
VALUES ('978-8184959451', 'A Million Thoughts: Learn All About Meditation from a Himalayan Mystic', 'Each one of us is a master of infinite possibilities at a universal scale. Through meditation we experience our own magnificence, our true potential.Drawing on his experience of thousands of hours of earnest and strenuous meditation, renowned sage Om Swami pens a guide to help channelize unruly, futile thoughts and turn them into productive energy.A Million Thoughts shows how to meditate correctly, how to practice various styles of meditation and how to become proficient in the many yogic practices that will lead to the final stage of samadhi — the ultimate spiritual self-fulfilment. Brimming with firsthand experiences and references from ancient and classical texts, this brilliant book is most suited for the modern reader who wishes to master the art of meditation.', 'Om Swami', '2016-11-16', 9);