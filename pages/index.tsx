import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/infocard';

export default function Home() {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={'static'}>
        <Navbar.Brand>
          <Text b color="inherit">
            LearnToCode
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Learning Platform</Navbar.Link>
          <Navbar.Link href="#">Community</Navbar.Link>
          <Navbar.Link href="#">Contact us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      {/* JumboTron */}
      <Grid.Container
        justify="center"
        css={{
          height: '500px;',
          backgroundImage:
            'url(https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800&h=750&dpr=2)',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text
              weight={'bold'}
              size={70}
              css={{
                textAlign: 'center',
                'text-shadow':
                  '2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000',
              }}
            >
              The Education Platform of the future
            </Text>
            <Button
              size="md"
              shadow
              color="gradient"
              css={{
                width: '100%',
                marginTop: '10px',
                'text-shadow':
                  '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
              }}
            >
              Join For Free
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* 3 Panel cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard 
          label='Course'
          title='Learn Next.js with CooperCodes'
          imageURL='https://images.pexels.com/photos/4055323/pexels-photo-4055323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          studentCount='3,500'
          />
          
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard 
          label='Course'
          title='Learn Apollo Server'
          imageURL='https://images.pexels.com/photos/14284402/pexels-photo-14284402.jpeg?auto=compress&cs=tinysrgb&w=1600'
          studentCount='1,575'
          />
          
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard 
          label='Course'
          title='Learn Z80 Machine Assembler'
          imageURL='https://images.pexels.com/photos/6755065/pexels-photo-6755065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          studentCount='800'
          />
          
        </Grid>
      </Grid.Container>
    </Container>
  );
}
