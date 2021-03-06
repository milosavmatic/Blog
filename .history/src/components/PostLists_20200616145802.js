import React from 'react';
import PostItem from './PostItem';

const posts = [
    {
        title: 'News about city',
        image:
            'https://www.kurir.rs/data/images/2013/01/23/21/257765_moskva-crveni-trg_ls.jpg',
        desc:
            'Moscow (/ˈmɒskoʊ/, /ˈmɒskaʊ/;[10][11] Russian: Москва, tr. Moskva, IPA: [mɐˈskva] (About this soundlisten)) is the capital and most populous city of Russia, standing on the Moskva River in the central part of Western Russia, Moscow s population is estimated at 12.5 million residents within the city proper, while over 17 million residents in the urban area,[12] and over 20 million residents in the Moscow Metropolitan Area.[13][14] The city limits cover an area of 2,511 square kilometres (970 sq mi), while the metropolitan area covers over 26,000 square kilometres (10,000 sq mi),[13] Moscow is among the world is largest cities, being the most populous city entirely within Europe, the most populous urban area in Europe,[12] the most populous metropolitan area in Europe,[13][14] and also the largest city (by area) on the European continent',
    },
    {
        title: 'News about city',
        image:
            'https://www.kurir.rs/data/images/2013/01/23/21/257765_moskva-crveni-trg_ls.jpg',
        desc:
            'Moscow (/ˈmɒskoʊ/, /ˈmɒskaʊ/;[10][11] Russian: Москва, tr. Moskva, IPA: [mɐˈskva] (About this soundlisten)) is the capital and most populous city of Russia, standing on the Moskva River in the central part of Western Russia, Moscow s population is estimated at 12.5 million residents within the city proper, while over 17 million residents in the urban area,[12] and over 20 million residents in the Moscow Metropolitan Area.[13][14] The city limits cover an area of 2,511 square kilometres (970 sq mi), while the metropolitan area covers over 26,000 square kilometres (10,000 sq mi),[13] Moscow is among the world is largest cities, being the most populous city entirely within Europe, the most populous urban area in Europe,[12] the most populous metropolitan area in Europe,[13][14] and also the largest city (by area) on the European continent',
    },
    {
        title: 'News about city',
        image:
            'https://www.kurir.rs/data/images/2013/01/23/21/257765_moskva-crveni-trg_ls.jpg',
        desc:
            'Moscow (/ˈmɒskoʊ/, /ˈmɒskaʊ/;[10][11] Russian: Москва, tr. Moskva, IPA: [mɐˈskva] (About this soundlisten)) is the capital and most populous city of Russia, standing on the Moskva River in the central part of Western Russia, Moscow s population is estimated at 12.5 million residents within the city proper, while over 17 million residents in the urban area,[12] and over 20 million residents in the Moscow Metropolitan Area.[13][14] The city limits cover an area of 2,511 square kilometres (970 sq mi), while the metropolitan area covers over 26,000 square kilometres (10,000 sq mi),[13] Moscow is among the world is largest cities, being the most populous city entirely within Europe, the most populous urban area in Europe,[12] the most populous metropolitan area in Europe,[13][14] and also the largest city (by area) on the European continent',
    },
];

const PostList = () => {
    return (
        <div>
            {posts.map((post) => (
                <PostItem
                    title={post.title}
                    image={post.image}
                    desc={post.desc}
                />
            ))}
        </div>
    );
};

export default PostList;
