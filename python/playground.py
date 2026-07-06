import math
from matplotlib import pyplot as plt
import numpy as np 
import pandas as pd
import torch  
from torch import nn
from torch.utils.data import DataLoader 
from torchvision import datasets
from torchvision.transforms import v2
import matplotlib
print(torch.__version__)
# intro to tensors 
scalar = torch.tensor (7)
print(scalar)
print(scalar.ndim)
print(scalar.item())
vector = torch.tensor([7,7])
print(vector)
print(vector.ndim)
print(vector.shape)
MATRIX = torch.tensor ([[7,7],[7,7 ]])
print(MATRIX)
print(MATRIX[0])
print(MATRIX.shape) 
TENSOR = torch.tensor([[[1,2,3],[4,5,6],[7,8,9]]])
print(TENSOR)
print(TENSOR.ndim)
print(TENSOR.shape)
tensor2 = torch.tensor ([[[[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[1,2,3,4,5,6]]]])
print(tensor2)
print(tensor2.ndim)
print(tensor2.shape)
# create random stensor  = torr h.rand(3,4)
rand_tensor = torch.rand(3,4)
print(rand_tensor)
print(rand_tensor.ndim)
print(rand_tensor.shape)
rand_tensor2 = torch.rand(1,10,5)
print(rand_tensor2.shape)
print(rand_tensor2)
# images are represented by height(224), width(224), color channels(3),
random_image_tensor = torch.rand(224,224,3)
print(random_image_tensor)
print(random_image_tensor.ndim)
#zeros and ones
zero_tensor = torch.zeros(3,4)
print(rand_tensor*zero_tensor)
ones_tensor = torch.ones(3,4)
print(ones_tensor)
# ranges of tensors 
print(torch.range(0,10))
one_to_ten = torch.arange(1, 11)
ten_zeros = (torch.zeros_like(one_to_ten))
print(one_to_ten)
print(ten_zeros)
tensor_ran = torch.arange(1, 3, 4)
print(tensor_ran)
print(tensor_ran.shape)
#tensor datatypes
float_32_tensor = torch.tensor([1.0,2.0,3.0], dtype=torch.float32, device='cpu', requires_grad=False)
print(float_32_tensor)
# dtype = the data type of a given tensor, device = what the tensor is ran on (cpu,gpu), and requires_grad = whether or not to track the gradients for backpropagation
# how to change the dtpe of a tensor
float_16_tensor = float_32_tensor.type(torch.float16)
print(float_16_tensor * float_32_tensor)
tensor_bit = torch.tensor([3,6,9], dtype = torch.int32)
print(tensor_bit* float_32_tensor)
# Common Issues with Tensors 1. Tensors are not the same data type fixed by tensor.dtype 2. Tensos arent the right shape fixed by tensor.shape 3. Tensors are not on the right device fixed by tensor.device
# These are Tensor attributes 
My_Tensor = torch.rand(2,1) 
print(My_Tensor.shape)
print(My_Tensor.dtype)
print(My_Tensor.device)
print(My_Tensor)
My_Tensor2 = My_Tensor.type(torch.float16)
print(My_Tensor * My_Tensor2)
print(My_Tensor2)
print((My_Tensor2*My_Tensor).dtype)
# Tensor opperations ex: addition, subtaraction, multipication, dividion, matrix multiplication 
Tensor1 = torch.tensor([[1,2,3],[1,2,3]])
print(Tensor1 +10)
print(Tensor1*10)
print(Tensor1-10)
print(Tensor1/10)
#Matrix multipllication is done by element wise multiplication or matrix multiplication 
# Matrix multiplication is the same as dot product  
# print(Tensor1 * Tensor1) # element wise multiplication
# print(torch.matmul(Tensor1,Tensor1)) # matrix multiplication 
# one of the most common errors in DL is shape errors We must use 2 rules 1. the inner diemsions must match ex tensor1 = (2,3) tensor2 = (3,2) 2. the resulting matrix has the shape of the outer dimensions ex: tensor1 = (2,3) tensor2 = (3,2) result = (2,2)
# to fix shape errors we can use transpose
print(Tensor1.T.shape)
print(Tensor1.shape)
print(torch.mm(Tensor1,Tensor1.T))
# Works becaause the inner dimensions match and the resulting shape is the outer dimensions
tensor1 = torch.tensor([[1,2,3],[4,5,6],[7,8,9]])
tensor2 = torch.tensor([[10,11,12],[13,14,15],[16,17,18]])
tensor3 = torch.mm(tensor1,tensor2).type(torch.float32)
# Tensor aggreation(sum,min,max,mean) 
print(tensor3.max())
print(tensor3.min())
print(tensor3.mean())
print(tensor3.sum())
# Tensor indices can be found with argmin() and argmax() 
print(tensor3.argmin())
print(tensor3.argmax())
# Reshaping stacking squezing and unsquezing 1(Reshaping an input tensor to a defined shape 2. View shows the same tesnor in a different shape but has the same memmory as the original tensor 3. Stacking is the joining of tensors on top of each other 4. Squeezing is the removal of all single dimensions from a tensor 5. Unsqueezing is the addition of a single dimension to a tensor at a specific dimenson) 
# permute returns a view of the unput with dimensions permuted(swapped) in a certian way
print(tensor3.shape) 
print(tensor3.reshape(9,1))
print(tensor3.reshape(1,9))
tensor4 = torch.rand(3,3).type(torch.float32)
# stack tensors on top of each other 
tensor4_stack = torch.stack([tensor4,tensor3],dim=0)
print(tensor4_stack)
print(tensor4_stack.shape)
print(torch.unsqueeze(tensor4_stack, dim=1))
Tensor_5 = torch.unsqueeze(tensor4_stack, dim=3)
print(torch.squeeze(Tensor_5))
print(Tensor_5.shape)
#permute rearanges the dims in a tensor in a specific way 
Tensor6 = torch.rand(3,3,2)
print(Tensor6.shape)
print(Tensor6.permute(2,1,0).shape)
#downlaoding data from open datasets 
training_data = datasets.FashionMNIST(root="data", train=True, download=True, transform=v2.Compose([v2.ToImage(), v2.ToDtype(torch.float32, scale=True)]))
test_data = datasets.FashionMNIST(root="data", train=False, download=True, transform=v2.Compose([v2.ToImage(), v2.ToDtype(torch.float32, scale=True)]))
batch_size = 64
#creating data loaders
train_dataloader = DataLoader(training_data, batch_size=batch_size)
test_dataloader = DataLoader(test_data, batch_size=batch_size)
# iterating through data sets 
for X,y in test_dataloader:
    print(f"shape of X [N, C, H, W]: {X.shape}")
    print(f"shape of y: {y.shape}{y.dtype}")
    break
# creating a model using nn.module 
device = torch.accelerator.current_accelerator()if torch.accelerator.is_available() else "cpu"
print(f"Using {device} device")
#defining model 
class NeuralNetwork(nn.Module):
    def __init__(self):
        super().__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(nn.Linear(28*28,512), nn.ReLU(), nn.Linear(512,512), nn.ReLU(), nn.Linear(512,10))
    def forward(self,x):
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits 
        
model = NeuralNetwork().to(device)
print(model)
# loss function and optimizer
loss_fn=nn.CrossEntropyLoss()
optimizer=torch.optim.SGD(model.parameters(), lr=1e-3)
def train(dataloader, model, lossfn, optimizer):
    size = len(dataloader.dataset)
    model.train()
    for batch, (X,y) in enumerate(dataloader):
        X,y = X.to(device), y.to(device)
        # compute perdiction error
        pred = model(X)
        loss = loss_fn(pred,y)
        #backpropagation(gradient)
        loss.backward()
        optimizer.step()
        optimizer.zero_grad()
        if batch % 100 == 0:
            loss, current = loss.item(), (batch+1)*len(X)
            print(f"loss: {loss:>7f} [{current:>5d}/{size:>5d}]")
# testing performance on test data
def test(dataloader, model, loss_fn):
    size = len(dataloader.dataset)
    num_batches = len(dataloader)
    model.eval()
    test_loss, correct = 0,0
    with torch.no_grad():
        for X,y in dataloader:
            X,y = X.to(device), y.to(device)
            pred = model(X) 
            test_loss += loss_fn(pred,y).item()
            correct += (pred.argmax(1) == y).type(torch.float).sum().item()
    test_loss /= num_batches 
    correct /= size
    print(f"Test Error: \n Accuracy: {(100*correct):>0.1f}%, avg loss: {test_loss:>8f}\n")
epochs = 5
for t in range(epochs):
    print(f"Epoch {t+1}\n-------------------------------")
    train(train_dataloader,model,loss_fn,optimizer)
    test(test_dataloader,model,loss_fn)
print("Done!")
torch.save(model.state_dict(), "model.pth")
print("saved pytorch Model state to model.pth")
model = NeuralNetwork().to(device)
model.load_state_dict(torch.load("model.pth",weights_only = True))
classes = ["T-shirt/top","Trouser","Pullover","Dress","Coat","Sandal","Shirt","Sneaker","Bag","Ankle boot"]
model.eval()
x,y = test_data[0][0], test_data[0][1]
with torch.no_grad():
    x= x.to(device)
    pred = model(x)
    predicted, actual = classes [pred[0].argmax(0)],classes[y]
    print(f'predicted: "{predicted}",Actual: {actual}"') 
# viewing data  
labels_map = {
    0: "T-Shirt",
    1: "Trouser",
    2: "Pullover",
    3: "Dress",
    4: "Coat",
    5: "Sandal",
    6: "Shirt",
    7: "Sneaker",
    8: "Bag",
    9: "Ankle Boot",
}
figure = plt.figure(figsize=(8, 8))
cols, rows = 3, 3
for i in range(1, cols * rows + 1):
    sample_idx = torch.randint(len(training_data), size=(1,)).item()
    img, label = training_data[sample_idx]
    figure.add_subplot(rows, cols, i)
    plt.title(labels_map[label])
    plt.axis("off")
    plt.imshow(img.squeeze(), cmap="gray")
plt.show()
