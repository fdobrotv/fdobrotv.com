import React from 'react'
import WordCloud from "react-d3-cloud";

const data = [
    {text: 'Java', value: 10000000},
    {text: 'Spring Boot', value: 5000},
    {text: 'Play Framework 2', value: 5000},
    {text: 'Spring Statemachine', value: 5000},
    {text: 'Quarkus', value: 2500},
    {text: 'Hibernate', value: 4000},
    {text: 'Flyway', value: 6000},
    {text: 'Ebean ORM', value: 3000},
    {text: 'Kotlin', value: 5000},
    {text: 'Elasticsearch', value: 3000},
    {text: 'Geoserver', value: 6000},
    {text: 'Gradle', value: 2500},
    {text: 'Maven', value: 2500},
    {text: 'SBT', value: 2500},
    {text: 'Scala', value: 2500},
    {text: 'Postgres', value: 10000},
    {text: 'Mongo', value: 5000},
    {text: 'GraalVM', value: 250},
    {text: 'Liquibase', value: 250},
];

const fontSizeMapper = word => Math.log2(word.value) * 4;
const rotate = word => word.value % 360;

function WordCloudComponent() {
    return (
        <div className="wordcloud">
            <WordCloud
                data={data}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
            />
        </div>
    )
}

export default WordCloudComponent