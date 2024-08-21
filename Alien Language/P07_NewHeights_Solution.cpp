#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int c; cin >> c; 
    int sum = 0; 
    for(int i = 1; i <= c; i++) sum += c * i - i * i; //simulate the function
    cout << sum; 
    return 0;
}
