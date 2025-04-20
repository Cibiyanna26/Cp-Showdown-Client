"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts";
import { ComparableMatrix, MultipleBarChartProps } from "@/lib/types";
import { COLORS } from "@/lib/variables";
import styles from '@/components/Dashboard/DifferentMetrix.module.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";


const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];


export default function Component({attr, comparable_matrix} : MultipleBarChartProps) {

  const [chartData, setChartData] = useState<Record<string, any>[]>([]);
  const [chartConfig, setChartConfig] = useState<ChartConfig>({});

  function updateComparableMatrix(attr: keyof ComparableMatrix, comparable_matrix: ComparableMatrix[]) {

    const newChartConfig: ChartConfig = comparable_matrix.reduce(
      (config, value, index) => {
        const key = value.username;
        config[key] = {
          label: value.username,
          color: `hsl(var(--chart-${index + 1}))`,
        };
        return config;
      },
      {
        [attr]: {
          label: attr.charAt(0).toUpperCase() + attr.slice(1),
        },
      } as ChartConfig
    );    
    newChartConfig[attr] = {
      label:attr.charAt(0).toUpperCase() + attr.slice(1)
    }
    console.log("new Chart Data", newChartConfig);

    setChartConfig(newChartConfig);


    const newChartData = comparable_matrix.map((value, index) => ({
      user: value?.username,
      [attr]: value[attr],
      fill:
         `hsl(var(--chart-${index + 1}))`, // Fallback color
    }));

    console.log("new Data", newChartData);

    setChartData(newChartData);

    // chart Config
  }

  useEffect(() => {
    updateComparableMatrix(attr, comparable_matrix);
  }, [attr, comparable_matrix]);
  
  

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span
            style={{
              color:
                COLORS[Math.floor(Math.random() * COLORS.length)]?.border ||
                "white",
            }}
          >
            {attr.charAt(0).toUpperCase() + attr.slice(1)}
          </span>
        </CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="horizontal"
            margin={{
              left: 0,
            }}
          >
            <XAxis
              dataKey={"user"}
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                String(chartConfig[value as keyof typeof chartConfig]?.label)
              }
            />
            <XAxis dataKey={attr} type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {/* <Bar dataKey={attr} layout="vertical" radius={5} /> */}
            <Bar dataKey={attr} fill="var(--color-desktop)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div> */}
      </CardFooter>
    </Card>
  );
}
